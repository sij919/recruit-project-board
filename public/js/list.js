import { setPageNumber, setPage, clickPageButton } from "./pagination.js";

// 게시글 생성 (Json)
function setList() {
    let data = [];
    const name = ['홍길동', '이순신', '유관순', '강감찬', '신사임당'];

    for (let i = 0; i < 40; i++) {
        const recode = {
            idx: i + 1,
            title: `제목 ${i+1}`,
            writer: name[i % 5],
            content: `안녕하세요. 반갑습니다. ${i+1}`,
            date: new Date().toLocaleDateString(),
            count: 0
        }

        data.push(recode);
    }

    return data;
}

function getData() {
    const listObj = JSON.parse(sessionStorage.getItem("list"));

    return listObj;
}

// 게시글 리스트 조회 및 페이지네이션 호출
// @param - limit : 한 페이지 당 출력할 리스트 수
function getList(limit) {
    // Pagination Variable
    const totalCount = JSON.parse(sessionStorage.getItem("list")).length;
    const totalPageCount = Math.ceil(totalCount / limit);
    let currentPage = 1; // 현재 페이지 번호

    // 페이지 번호 추가
    setPageNumber(totalPageCount);

    // Set Data List
    setPage(Number(currentPage), limit);

    // 페이지 버튼 클릭 이벤트
    clickPageButton(currentPage, limit, totalPageCount);
}

export { setList, getList, getData }