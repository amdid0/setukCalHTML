const inputBox = document.getElementById('inputBox');
    const result = document.getElementById('result');
    //const hangeul = []

    inputBox.addEventListener('input', () => {
      const text = inputBox.value;

      let totalBytes = 0;
      for (let char of text) {
        if (char === '\n') {
          totalBytes += 2; //enter 2B
        } else if (char.match(/[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/)) {
          totalBytes += 3;
        } else if (char.match(/[a-zA-Z0-9!-/:-@[-`{-~]/)) {
          totalBytes += 1; // eng, num, sc 1B
        } else if (char === ' ') {
          totalBytes += 1; // space 1B
        } else {
          totalBytes += 1; // 1B
        }
      }

      result.textContent = `Bytes: ${totalBytes}`;
    });




