let isAutoComplement = false
const onAutoComplementChange = () => {
  isAutoComplement = document.getElementById("auto-save").checked
  if (isAutoComplement) {
    complement()
    switchViewComplementButtonTip(false)
  }
}

const switchViewComplementButtonTip = (value) => {
  document.getElementById("complement-button-tip").style.display = value ? 'unset' : 'none'
}

const complement = () => {
  const input = document.getElementById("input-form").value
  document.getElementById("output-form").value = complementText(input)
  if (!isAutoComplement) {
    switchViewComplementButtonTip(false)
  }
}

/**
 * `@xxxx` を [@xxxx](https://trap.jp/author/xxxx/) に変える
 * @param {string} text
 * @return {string}
 */
const complementText = (text) => {
  const getUserName = /(?<![\[\\])@([a-zA-Z0-9](?:[a-zA-Z0-9_]*[a-zA-Z0-9])?)/g
  return text.replace(getUserName, '[@$1](https://trap.jp/author/$1/)').replace(/\\@/g, '@')
}

const clearInputForm = () => {
  document.getElementById("input-form").value = ''
  onInputChange()
}

const copyComplementedText = () => {
  const output = document.getElementById("output-form")
  output.select()
  document.execCommand("copy")
}

const onInputChange = () => {
  if (isAutoComplement) {
    complement()
  } else {
    switchViewComplementButtonTip(true)
  }
}
