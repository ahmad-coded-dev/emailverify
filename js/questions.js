function show_ans(this_question) {
    if (this_question.classList.contains('show_ans')) {
        this_question.classList.remove('show_ans');
    } else {
        this_question.classList.add('show_ans');
    }
}
