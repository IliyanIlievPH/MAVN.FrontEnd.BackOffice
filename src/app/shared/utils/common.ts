import {DISPLAY_ACCURACY} from 'src/app/core/constants/const';

export function toParamsString(model: any): string {
  const params: {key: string; value: string}[] = [];

  for (const key in model) {
    if (model.hasOwnProperty(key)) {
      const prop = (model as any)[key];
      // formData.append(key, prop);
      params.push({key, value: prop ? encodeURIComponent(prop.toString()) : ''});
    }
  }

  const paramsStr = '?' + params.map((param) => `${param.key}=${param.value}`).join('&');

  return paramsStr;
}

export function RoundToAccuracy(value: number, accuracy = DISPLAY_ACCURACY) {
  if (value) {
    value = Math.round(value * Math.pow(10, accuracy)) / Math.pow(10, accuracy);
  }

  return value;
}

export function DeepCopy(obj: any): any {
  let copy;

  if (null == obj || 'object' !== typeof obj) {
    return obj;
  }

  if (obj instanceof Date) {
    copy = new Date();
    copy.setTime(obj.getTime());
    return copy;
  }

  if (obj instanceof Array) {
    copy = [];
    for (let i = 0, len = obj.length; i < len; i++) {
      copy[i] = DeepCopy(obj[i]);
    }
    return copy;
  }

  if (obj instanceof Object) {
    copy = {} as any;
    for (const attr in obj) {
      if (obj.hasOwnProperty(attr)) {
        copy[attr] = DeepCopy(obj[attr]);
      }
    }
    return copy;
  }

  throw new Error('Not supported type.');
}
