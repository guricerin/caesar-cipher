function decrypt(text: string, rshift: number): string {
  const mod = 26
  let res = ""

  for (let i = 0; i < text.length; i++) {
    const code = text.charCodeAt(i)
    let newcode = code
    if (0x41 <= code && code <= 0x5a) { // [A-Z]
      newcode = (code - 0x41 + rshift) % mod + 0x41
    } else if (0x61 <= code && code <= 0x7a) { // [a-z]
      newcode = (code - 0x61 + rshift) % mod + 0x61
    }
    res += String.fromCharCode(newcode)
  }

  return res
}

function decrypts25(text: string): Array<string> {
  let res = []
  for (let i = 1; i < 26; i++) {
    res.push(decrypt(text, i))
  }
  return res
}

export { decrypt, decrypts25 }
