class Board {
    constructor(idx, title, writer, content, date) {
        this.idx = idx;
        this.title = title;
        this.writer = writer;
        this.content = content;
        this.date = date;
        this.count = 0;
    }

    set Title(value) {
        if (value.length === 0) throw new Error("제목을 입력해주세요.");
        this.title = value;
    }

    set Writer(value) {
        if (value.length === 0) throw new Error("작성자를 입력해주세요.");
        this.writer = value;
    }

    set Content(value) {
        if (value.length === 0) throw new Error("내용을 입력해주세요.");
        this.content = value;
    }

    set Date(value) {
        this.date = value;
    }
}

export { Board }