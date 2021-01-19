
export async function login(data) {
  return new Promise((resolve, reject) => {
    if (data.username === 'admin' && data.password === '123456') {
      resolve({ 'data': { 'cmsId': 'admin'} })
    } else {
      reject({ 'message': '帐户或密码错误'})
    }
  })
}