// 작성자 마스킹 처리
// @param - str: 변경할 문자열 / char : 마스킹 문자
function masking(str, char) {
    let mask = '';

    for (let i = 0; i < str.length - 2; i++) {
        mask += char;
    }

    return `${str.substring(0, 1)}${mask}${str.substring(str.length-1)}`;
}

// 전체 바이트 수 체크
// @param - str : 체크할 문자열
function checkBytes(str) {
    let strLen = str.length;
    let totalbytes = 0;
    let len = 0;
    let char = "";

    for(let i=0; i<str.length; i++) {
        char = str.charAt(i);
        if (escape(char).length > 4) {
            totalbytes += 2;
        } else {
            totalbytes++;
        }
    }

    return totalbytes;
}

// 빈 값 체크
// @param - title : 제목 / writer : 작성자 / content : 내용
function isEmpty(title, writer, content) {
    if (title.length === 0) throw new Error("제목을 입력해주세요.");
    if (writer.length === 0) throw new Error("작성자를 입력해주세요.");
    if (content.length === 0) throw new Error("내용을 입력해주세요.");
}

export { masking, checkBytes, isEmpty }