import request from '@/utils/request'

export async function publish(data) {
  return request({
    url: '/publish',
    method: 'post',
    data
  })
}