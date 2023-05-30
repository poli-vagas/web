import { format } from 'date-fns'
import { createServer, Response } from 'miragejs'
import { getAleatoryNumber } from '~/utils/aleatoryNumber'
import { auth_response } from './auth'
import {
  all_notifications_response,
  notification_details_response
} from './notifications'
import { all_vacancies_response, total_vacancies_response } from './vacancies'
import {
  administrator_details_response,
  all_administrators_response
} from './administrators'

createServer({
  routes() {
    this.urlPrefix = process.env.REACT_APP_API_URL || 'http://localhost:5000'
    this.namespace = ''

    this.post('/signin', () => auth_response)
    this.post('/forgot/send', (_, request) => {
      const { email } = JSON.parse(request.requestBody)
      if (email === 'invalid@test.com') {
        return new Response(
          400,
          { some: 'header' },
          { errors: ['Invalid e-mail'] }
        )
      }
      return new Response(200)
    })
    this.post('/forgot/validate', (_, request) => {
      const { code } = JSON.parse(request.requestBody)
      if (code === '0000') {
        return new Response(
          400,
          { some: 'header' },
          { errors: ['Invalid code'] }
        )
      }
      return new Response(200)
    })
    this.post('/forgot/reset', () => new Response(200))
    this.post('/jobs/search', () => all_vacancies_response)
    this.get('/jobs/totals', () => total_vacancies_response)

    this.get('/notifications', () => all_notifications_response)
    this.get('/notifications/:id', () => notification_details_response)

    this.post('/notifications', (_, request) => {
      const data = JSON.parse(request.requestBody)

      return {
        ...data,
        id: getAleatoryNumber(555, 999),
        createAt: format(new Date(), 'yyyy-MM-dd'),
        status: false
      }
    })
    this.post('/notifications/send', (_, request) => {
      const data = JSON.parse(request.requestBody)

      return {
        ...data,
        id: getAleatoryNumber(555, 999),
        createAt: format(new Date(), 'yyyy-MM-dd'),
        status: true
      }
    })

    this.patch('/notifications/send/:id', () => new Response(200))

    this.get('/administrators', () => all_administrators_response)
    this.get('/administrators/:id', () => administrator_details_response)
    this.patch('/administrators/:id', (_, request) => {
      const data = JSON.parse(request.requestBody)
      return data
    })
    this.delete('/administrators/:id', () => new Response(200))
    this.post('/administrators', (_, request) => {
      const data = JSON.parse(request.requestBody)
      return {
        ...data,
        id: getAleatoryNumber(555, 999),
        createAt: format(new Date(), 'yyyy-MM-dd')
      }
    })
  }
})
