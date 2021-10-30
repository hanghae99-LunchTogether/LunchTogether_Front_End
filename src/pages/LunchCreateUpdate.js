import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { lunchActions } from "../redux/modules/lunch";
import HashtagList from "../components/HashtagList";

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
  const [location, setCreateLocation] = React.useState(
    _post ? _post.location : ""
  );
  const [membernum, setCreateMemberNum] = React.useState(
    _post ? _post.membernum : ""
  );

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
      const hashtag = {
        id: nextId.current,
        text: hashtagInput,
      };
      setHashtags([...hashtags, hashtag]);

      setHashtagInput("");

      nextId.current += 1;
    }
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

  //작성 되지않은 인덱스값 위치로가면 돌아가기
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
    <CreateLunchBox>
      <HashtagList hashtags={hashtags} />
      <label>
        hashtag:
        <input
          name="hashtagInput"
          value={hashtagInput}
          onChange={onChangeHash}
          onKeyPress={onKeyPress}
          placeholder="해시태그를 입력해주세요"
        />
      </label>
      <div>
        <label>
          title:
          <input
            name="title"
            value={title}
            onChange={onChange}
            placeholder="오늘은 누구랑 먹을까?"
          />
        </label>
      </div>
      <div>
        <label>
          content:
          <input
            name="content"
            value={content}
            onChange={onChange}
            placeholder="오늘은 누구랑 먹을까?"
          />
        </label>
      </div>
      <div>
        <label>
          date:
          <input
            name="date"
            value={date}
            onChange={onChange}
            placeholder="오늘은 누구랑 먹을까?"
          />
        </label>
      </div>
      <div>
        <label>
          location:
          <input
            name="location"
            value={location}
            onChange={onChange}
            placeholder="오늘은 누구랑 먹을까?"
          />
        </label>
      </div>
      <div>
        <label>
          membernum:
          <input
            name="membernum"
            value={membernum}
            onChange={onChange}
            placeholder="오늘은 누구랑 먹을까?"
          />
        </label>
      </div>
      <div>
        {is_edit ? (
          <Button onClick={editLunch} type="submit">
            수정하기
          </Button>
        ) : (
          <Button onClick={addLunch} type="submit">
            저장하기
          </Button>
        )}
      </div>
    </CreateLunchBox>
  );
};

const CreateLunchBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 300px;
  width: 300px;
  margin: auto;
  background-color: #ffad60;
`;

const Button = styled.button`
  height: 22px;
  width: 100px;
`;

export default LunchCreateUpdate;
