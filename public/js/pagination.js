import { getList, getData } from "./list.js";
import { masking } from "./function.js"

// 페이지 리스트 출력
// @param - currentPage: 현재 페이지 / limit : 한 페이지 당 출력할 리스트 수
function setPage(currentPage, limit) {

    const listObj = getData();

    const boardList = (obj) => {
        return `
            <tr>
                <td>${obj.idx}</td>
                <td><a href='/board/write.html?index=${obj.idx}'>${obj.title}</a></td>
                <td>${masking(obj.writer, "*")}</td>
                <td>${obj.date}</td>
                <td>${obj.count}</td>
            <tr>
        `;
    }
    const tbody = document.querySelector("tbody");
    tbody.innerHTML = '';

    for (let i = limit * (currentPage - 1) + 1; i <= limit * (currentPage - 1) + limit && i <= listObj
        .length; i++) {
        tbody.innerHTML += boardList(listObj[i - 1]);
    }
}

// 페이지 번호 추가
// @param - totalPageCount : 전체 페이지 번호 수
function setPageNumber(totalPageCount) {
    const pageList = document.querySelector('.page-list');
    pageList.innerHTML = '';
    for (let i = 1; i <= totalPageCount; i++) {
        pageList.innerHTML += `<span class="page-num">${i}</span>`;
    }
}

// 페이지 버튼 클릭 이벤트
// @param - currentPage: 현재 페이지 / limit : 한 페이지 당 출력할 리스트 수 / totalPageCount : 전체 페이지 수
function clickPageButton(currentPage, limit, totalPageCount) {
    const pageNumberButton = document.querySelectorAll('.page-num');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');

    pageNumberButton.forEach((numberButon) => {
        numberButon.addEventListener('click', (e) => {
            currentPage = e.target.innerHTML;
            setPage(currentPage, limit);
        })
    });

    prevButton.addEventListener('click', (e) => {
        setPage(1, limit);
        nextButton.style.display = 'block';
    });

    nextButton.addEventListener('click', (e) => {
        setPage(totalPageCount, limit);
    });
}

// 한 페이지 내 출력할 리스트 갯수 선택 (전역함수 : Onclick 이벤트 적용)
window.selectChange = () => {
    let option = document.getElementById('page');
    let optionVal = option.options[option.selectedIndex].value;

    getList(Number(optionVal));
}
    
export { setPage, setPageNumber, clickPageButton }