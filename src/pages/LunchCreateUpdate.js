/* eslint-disable */

import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import "react-datepicker/dist/react-datepicker.css"; // css import
import { useDispatch, useSelector } from "react-redux";
import { lunchActions } from "../redux/modules/lunch";
import HashtagList from "../components/HashtagList";
import Calendar from "../components/DatePicker";
import FmdGoodIcon from "@mui/icons-material/FmdGood";

const LunchCreateUpdate = props => {
  const dispatch = useDispatch();

  const post_list = useSelector(state => state.lunch.lunchList);

  //params가져오기
  const post_id = props.match.params.lunchid;
  const is_edit = post_id ? true : false;

  //작성, 수정 페이지 구별
  const _post = is_edit
    ? post_list.find(p => p.lunchid === Number(post_id))
    : null;

  const [title, setCreateTitle] = React.useState(_post ? _post.title : "");
  const [content, setCreateContent] = React.useState(
    _post ? _post.content : ""
  );
  const [date, setCreateDate] = React.useState(_post ? _post.date : "");
  console.log(date);
  const [location, setCreateLocation] = React.useState(
    _post ? _post.location : ""
  );
  const [membernum, setCreateMemberNum] = React.useState(
    _post ? _post.membernum : ""
  );

  // const [lunch, setLunch] = useState({
  //   title: _post.title,
  //   content: _post.content,
  //   date: _post.date,
  //   location: _post.location,
  //   membernum: _post.membernum,
  // });

  // const onChange = e => {
  //   const {
  //     target: { name, value },
  //   } = e;

  //   setLunch({
  //     ...lunch,
  //     [name]: value,
  //   });
  // };

  //해시태그
  const [hashtagInput, setHashtagInput] = useState("");

  const onChangeHash = e => {
    setHashtagInput(e.target.value);
  };
  const [hashtags, setHashtags] = useState([]);

  const nextId = useRef(1);

  //해시태그 엔터키 작동
  const onKeyPress = e => {
    if (e.key === "Enter") {
      const hashtag = [
        {
          id: nextId.current,
          text: hashtagInput,
        },
      ];
      setHashtags([...hashtags, hashtag]);

      setHashtagInput("");

      nextId.current += 1;
    }
  };

  const onRemove = id => {
    // window.alert("와우 삭제 가능?")

    setHashtags(hashtags.filter(hashtag => hashtag[0].id !== id));
  };

  const { history } = props;

  const MadeLunch = {
    lunchid: post_id,
    title,
    content,
    date,
    location,
    membernum,
  };

  //작성 되지 않은 인덱스값 위치로가면 돌아가기
  useEffect(() => {
    if (is_edit && !_post) {
      console.log("포스트 정보가 없어요!");
      history.goBack();
      return;
    }
  }, []);

  //각 input값 가져오기
  const onChange = e => {
    const {
      target: { name, value },
    } = e;
    if (name === "title") {
      setCreateTitle(value);
    } else if (name === "content") {
      setCreateContent(value);
    } else if (name === "date") {
      console.log(value);
      setCreateDate(value);
    } else if (name === "location") {
      setCreateLocation(value);
    } else if (name === "membernum") {
      setCreateMemberNum(value);
    }
  };

  const addLunch = e => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(lunchActions.createLunchAPI(MadeLunch));
  };

  const editLunch = e => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(lunchActions.updateLunchAPI(MadeLunch));
  };

  return (
    <>
      <CreateLunchBox>
        {is_edit ? (
          <LunchPageName>점심약속 수정하기</LunchPageName>
        ) : (
          <LunchPageName>점심약속 등록하기</LunchPageName>
        )}
        <LunchPageDescWrap>
          <LunchPageDesc>새로운 사람과의 즐거운 점심을 위해</LunchPageDesc>
          <LunchPageDesc>점심약속을 작성해보세요</LunchPageDesc>
        </LunchPageDescWrap>
        <HashtagList hashtags={hashtags} onRemove={onRemove} />
        <InputWrap>
          <label>
            <LabelName>hashtag</LabelName>
            <LunchInput
              name="hashtagInput"
              value={hashtagInput}
              onChange={onChangeHash}
              onKeyPress={onKeyPress}
              placeholder="해시태그를 입력해주세요"
            />
          </label>
        </InputWrap>
        <InputWrap>
          <label>
            <LabelName>타이틀</LabelName>
            <LunchInput
              name="title"
              value={title}
              onChange={onChange}
              placeholder="작성해주세요."
            />
          </label>
        </InputWrap>
        <InputWrap>
          <label>
            <LabelName>설명</LabelName>
            <LunchInputContent
              name="content"
              value={content}
              onChange={onChange}
              placeholder="점심약속에 대한 간단한 설명을 작성해주세요."
            />
          </label>
        </InputWrap>
        <InputWrap>
          <label>
            <LabelName>약속시간</LabelName>
            {/* <LunchInput
              name="date"
              value={date}
              onChange={onChange}
              placeholder="오늘은 누구랑 먹을까?"
            /> */}
          </label>
        </InputWrap>
        <InputWrap>
          <label>
            <LabelName>
              <FmdGoodIcon style={{ fontSize: "small" }} /> 만나는 장소
            </LabelName>
            <LunchInput
              name="location"
              value={location}
              onChange={onChange}
              placeholder="오늘은 누구랑 먹을까?"
            />
          </label>
        </InputWrap>
        <InputWrap>
          <label>
            <LabelName>모집인원</LabelName>
            <MemberNum onChange={onChange} value={membernum} name="membernum">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
            </MemberNum>
          </label>
        </InputWrap>
        <ButtonWrap>
          {is_edit ? (
            <Button onClick={editLunch} type="submit">
              수정하기
            </Button>
          ) : (
            <Button onClick={addLunch} type="submit">
              저장하기
            </Button>
          )}
        </ButtonWrap>
        <Calendar
          name="date"
          value={date}
          onChange={onChange}
          setDate={setCreateDate}
        />
      </CreateLunchBox>
    </>
  );
};

const CreateLunchBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 33.33vw;
  min-width: 350px;
  margin: auto;
  // background-color: #ffad60;
`;

const LunchPageName = styled.h1`
  font-weight: bold;
  font-size: 20px;
  margin: 30px;
`;

const LunchPageDescWrap = styled.div`
  text-align: center;
  font-weight: 400;
  font-size: 14px;
  margin-bottom: 30px;
`;

const LunchPageDesc = styled.p``;

const InputWrap = styled.div`
  flex: 1;
  padding: 10px;
  width: 100%;
`;

const LabelName = styled.p`
  font-size: 12px;
  font-weight: bold;
  padding-bottom: 10px;
`;

const LunchInput = styled.input`
  width: 100%;
  padding: 12px;
  border: 2px solid #dadada;
  border-radius: 5px;
`;

const LunchInputContent = styled.textarea`
  height: 129px;
  width: 100%;
  padding: 12px;
  border: 2px solid #dadada;
  border-radius: 5px;
`;

const MemberNum = styled.select`
  width: 100%;
  padding: 11px;
  border: 2px solid #dadada;
  border-radius: 10px;
`;

const ButtonWrap = styled.div`
  width: 40%;
`;

const Button = styled.button`
  background-color: #646464;
  color: white;
  height: 40px;
  width: 100%;
  border-radius: 20px;
  border: none;
`;

export default LunchCreateUpdate;
