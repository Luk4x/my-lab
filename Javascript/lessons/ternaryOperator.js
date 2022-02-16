// transferência bancária

const balance = true
const accountIsNotBlocked = true
const accountExist = true

const canTransfer = balance && accountIsNotBlocked && accountExist ? 'Yes' : 'No'

console.log(canTransfer)