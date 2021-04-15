const path = require('path')

const express = require('express')

// module.exports = path.dirname(process.mainModule.filename)
module.exports = path.dirname(require.main.filename);