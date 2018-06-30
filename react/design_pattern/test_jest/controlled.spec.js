// test page component which have many children

// original: need many selector
test('submits the form', () => {
  const onSubmit = jest.fn()
  const wrapper = shallow(<Controlled onSubmit={onSubmit} />)
  const firstName = wrapper.find('[name="firstName"]')
  firstName.simulate(
    'change',
    { target: { name: 'firstName', value: 'Christopher' } }
  )
  const lastName = wrapper.find('[name="lastName"]')
  lastName.simulate(
    'change',
    { target: { name: 'lastName', value: 'Chedeau' } }
  )
  const form = wrapper.find('form')
  form.simulate('submit', { preventDefault: () => { } })
  expect(onSubmit).toHaveBeenCalledWith('Christopher Chedeau')
})


// apply Page Object pattern
class Page {
  constructor(wrapper) {
    this.wrapper = wrapper
  }
  fill(name, value) {
    const field = this.wrapper.find(`[name="${name}"]`)
    field.simulate('change', { target: { name, value } })
  }
  submit() {
    const form = this.wrapper.find('form')
    form.simulate('submit', { preventDefault() { } })
  }
}

test('submits the form with the page object', () => {
  const onSubmit = jest.fn()
  const wrapper = shallow(<Controlled onSubmit={onSubmit} />)
  const page = new Page(wrapper)
  page.fill('firstName', 'Christopher')
  page.fill('lastName', 'Chedeau')
  page.submit()
  expect(onSubmit).toHaveBeenCalledWith('Christopher Chedeau')
})