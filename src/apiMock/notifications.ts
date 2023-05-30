export const all_notifications_response = {
  count: 3,
  rows: [
    {
      id: 1,
      createAt: '2021-11-13',
      audience: 0,
      message:
        'Atualizamos termos e condições de uso, conheça uma nova feature',
      status: true
    },
    {
      id: 2,
      createAt: '2021-11-10',
      audience: 3,
      message: 'Conclua o preenchimento do seu perfil',
      status: false
    },
    {
      id: 3,
      createAt: '2021-11-6',
      audience: 2,
      message:
        'Atualizamos termos e condições de uso, conheça uma nova feature',
      status: true
    }
  ]
}

export const notification_details_response = {
  id: 1,
  audience: 3,
  message: 'Atualizamos termos e condições de uso, conheça uma nova feature',
  month: '3',
  year: '2021'
}
