// transferência bancária

const balance = true
const accountIsNotBlocked = true
const accountExist = true

const rain = true

const getUmbrella = rain? 'Take umbrella' : 'Leave umbrella'

const canTransfer = balance && accountIsNotBlocked && accountExist ? 'Transfer is possible.' : "transfer isn't possible"

console.log(canTransfer)
console.log(getUmbrella)