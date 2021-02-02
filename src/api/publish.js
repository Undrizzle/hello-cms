import request from '@/utils/request'

export async function publish(data) {
  return request({
    url: '/publish',
    method: 'post',
    data
  })
}

export async function uploadImg(data) {
  return request({
    url: '/imgadd',
    method: 'post',
    data,
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
}

export async function deleteImg(data) {
  return request({
    url: '/imgdel',
    method: 'post',
    data
  })
}