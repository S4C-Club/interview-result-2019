import React from "react";

class Result extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: false };
  }

  renderResult = () => {
    return this.props.location.state.candidate.result ? (
      <div>
        MẬT THƯ KHẨN
        <br></br>
        Chào bạn,
        <br></br>
        CLB Truyền thông và kỹ năng mềm S4C xin thông báo đến bạn một tin vui và
        một tin buồn.
        <br></br>
        Đầu tiên hãy hít một hơi thật sâu và hét lên thật lớn khi đọc tin này:
        <br></br>
        <br></br>
        CHÚC MỪNG BẠN ĐÃ CHÍNH THỨC TRỞ THÀNH MỘT RED MAKER TẠI S4C
        <br></br>
        <br></br> Tiếp đến hãy thở thật đều vì chúng mình sẽ thông báo một tin
        buồn là không có tin vui thứ hai.
        <br></br>
        Việc chính thức trở thành một Red Maker đồng nghĩa với việc bạn sẽ
        bước vào cuộc hành trình viết nên bản nhạc - Red Song của chính mình tại
        VÒNG TRAINING của S4C. Cuộc phiêu lưu của các bạn sẽ bắt đầu vào:
        <br></br>
        Thời gian: 18h Thứ 3 ngày 17/9
        <br></br>Địa điểm: Phòng 602 Nhà A2
        <br></br>
        <br></br>Một lần nữa xin được chúc mừng và hẹn gặp lại bạn vào buổi
        1st meeting của chúng mình!
        <br></br>Thân ái,
        <br></br>S4C
      </div>
    ) : !this.props.location.state.candidate.result ? (
      <div>
        MẬT THƯ KHẨN
        <br></br>Chào bạn,
        <br></br>CLB Truyền thông và Kỹ năng mềm S4C xin thông báo với bạn một
        tin quan trọng.
        <br></br>Đầu tiên hãy hít thở thật sâu và bình tĩnh khi đọc thông tin
        này:
        <br></br>
        <br></br>CHÚNG MÌNH RẤT TIẾC BẠN ĐÃ KHÔNG VƯỢT QUA VÒNG PHỎNG VẤN CỦA
        S4C
        <br></br>
        <br></br>Chúng mình biết rằng bạn là một nhân tố rất rất tiềm năng tuy
        nhiên có lẽ bạn và mình chưa thật sự có duyên. Nhưng S4C tin rằng sẽ có
        nhiều cơ hội khác sẽ mở ra với bạn, hãy cố gắng tiến về phía trước và
        tìm kiếm những cánh cửa khác dành cho mình nhé!
        <br></br>Một lần nữa cảm ơn bạn rất nhiều vì đã dũng cảm ứng tuyển cho
        đợt tuyển thành viên thế hệ thứ 7 của S4C.
        <br></br>Hẹn gặp lại bạn vào một dịp không xa!
        <br></br>
        <br></br>Thân ái,
        <br></br>S4C
      </div>
    ) : (
      ""
    );
  };

  render() {
    return (
      <React.Fragment>
        <div className="letter">
          <div className="letter-wrapper">{this.renderResult()}</div>
        </div>
      </React.Fragment>
    );
  }
}

export default Result;
