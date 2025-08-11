import { ref, reactive } from 'vue';
import Utils from './tools';

// 扩展 window 类型
declare global {
  interface Window {
    $customer_detail_pre_v2?: string;
    $customer_detail_index_v2?: string;
  }
}

interface WebhookUrl {
  testing: string;
  production: string;
  privatization?: string;
}

export function useErrorReporting() {
  // 环境 host
  const testingEnvHosts = ['localhost-', 'dev.scribify.ai', 'whisperx-dev.aihujing.com'];
  const productionEnvHosts = ['www.scribify.ai', 'scribify.ai'];

  // webhook url
  const webhookUrl: WebhookUrl = {
    testing: Utils.Decrypt('ebxaZVDU7KprTl8QqXbhxqRUZ7ipw5mZByuwwtc+er4HJj+vFnAujkKjoemPJVsWNn4icdt1nUeX210KDzKRw3IaYbrnWg8xg0bNQZxXq2QDzqnnQEERO9gCUepFBOgB'),
    production: Utils.Decrypt('ebxaZVDU7KprTl8QqXbhxqRUZ7ipw5mZByuwwtc+er5z8kaTSbyjBzc7ujtTE1C0QR5DOwl4sBUxXe/2LSe61QmadvqX1fTc1W1YzrbD4u08jYUb0gBpdPk2/upNMsoV'),
  };

  // 日志内容
  const logArr = ref<any[]>([]);

  // 获取 webhook url
  function getWebhookUrl() {
    const { hostname } = window.location;
    if (productionEnvHosts.includes(hostname)) return webhookUrl.production;
    if (testingEnvHosts.includes(hostname)) return webhookUrl.testing;
    return '';
  }

  // 系统报错日志通知
  function reportSystemError(res: any, customData = true) {
    const url = res?.url;
    const headers = res?.headers || new Map();
    const data = res?._data;
    const webhook = getWebhookUrl();
    if (!webhook) return;
    let params: Record<string, any> = {
      访问服务: 'Scrify',
      页面地址: location.href,
      cardType1: 'hr',
      接口地址: url,
      code: data?.code,
      message: data?.message || '',
      status: res?.status,
      statusText: res?.statusText,
      cardType3: 'hr',
      服务端debugID: headers?.get('x-debug-request-id'),
      服务端logID: headers?.get('x-nws-log-uuid'),
      服务端date: headers?.get('date'),
      cardType4: 'hr',
      客户端UTCTime: Utils.getUTCTime(),
      客户端LocalTime: Utils.timeUTCToLocal(Utils.getUTCTime()),
      cardType5: 'hr',
      接口数据: JSON.stringify(res),
      cardType6: 'hr',
      系统信息: window.navigator.userAgent,
      cardType7: 'hr',
      缓存数据: JSON.stringify(window.localStorage)
    };
    if (customData) {
      params = {
        访问服务: 'Scrify',
        上报类型: 'customData',
        页面地址: location.href,
        cardType1: 'hr',
        客户端UTCTime: Utils.getUTCTime(),
        客户端LocalTime: Utils.timeUTCToLocal(Utils.getUTCTime()),
        cardType2: 'hr',
        系统信息: window.navigator.userAgent,
        cardType3: 'hr',
        缓存数据: JSON.stringify(window.localStorage),
        cardType4: 'hr'
      };
      try {
        for (let key in res) {
          params[key] = res[key]
        }
      } catch (err) {
        navigator.sendBeacon(webhook, JSON.stringify(res));
      }
    }
    logArr.value = [];
    for (const [label, value] of Object.entries(params)) {
      if (value === 'hr') {
        logArr.value.push({ tag: 'hr' });
      } else {
        logArr.value.push({
          tag: 'div',
          text: {
            tag: 'lark_md',
            content: `**${label}:** ${value}`
          }
        });
      }
    }
    logArr.value.push(
      { tag: 'hr' },
      {
        elements: [
          { content: '[来自系统报错日志通知]', tag: 'lark_md' }
        ],
        tag: 'note'
      }
    );
    const message = {
      msg_type: 'interactive',
      card: {
        config: {
          wide_screen_mode: true,
          enable_forward: true,
          update_multi: true
        },
        header: {
          title: {
            tag: 'plain_text',
            content: '系统报错日志通知'
          },
          template: 'red'
        },
        elements: logArr.value
      }
    };
    navigator.sendBeacon(webhook, JSON.stringify(message));
    logArr.value = [];
  }

  return {
    reportSystemError,
  };
}

export default useErrorReporting;


// import { useErrorReporting } from '~/utils/fsReport';
// const { reportSystemError } = useErrorReporting();
// // 系统报错
// reportSystemError(res, userInfo, introduction);