const tasks = arr => arr.join(' && ')

module.exports = {
  'hooks': {
    'pre-commit': tasks([
      'cmd',
      'cmd',
      'cmd'
    ])
  }
}