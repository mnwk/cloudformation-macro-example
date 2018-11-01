export function handler(event: any, context: any, callback: any): any {
  console.log(JSON.stringify(event, null, 4))
  callback(null, {
    requestId: event.requestId,
    status: 'success',
    fragment: event.fragment
  })
}
