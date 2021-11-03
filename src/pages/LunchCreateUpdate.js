import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import "react-datepicker/dist/react-datepicker.css"; // css import
import { useDispatch, useSelector } from "react-redux";
import HashtagList from "../components/HashtagList";
import { apis } from "../shared/axios";
import Calendar from "../components/Calendar";
import MapContainer from "../components/MapContainer";
// import Calendar from "../components/DatePicker";

const LunchCreateUpdate = props => {
  const [lunch, setLunch] = useState(null);
  const [date, setDate] = useState(null);
  const [placeInput, setPlaceInput] = useState("");
  const [searchKeyword, setSearchKeyword] = useState("");
  const [place, setPlace] = useState(null);
  const lunchId = props.match.params.id;
  const dispatch = useDispatch();

  const getLunchData = async () => {
    try {
      const data = await apis.getOneLunch(lunchId);
      const lunch = data.data.lunch;
      setLunch(lunch);
    } catch (error) {
      console.log(error);
    }
  };

  const post_list = useSelector(state => state.lunch.lunchList);

  //params가져오기
  const post_id = props.match.params.lunchid;
  const is_edit = post_id ? true : false;

  //작성, 수정 페이지 구별
  const _post = is_edit
    ? post_list.find(p => p.lunchid === Number(post_id))
    : null;

  const onChange = e => {
    const {
      target: { name, value },
    } = e;

    setLunch({
      ...lunch,
      [name]: value,
    });
  };

  //해시태그
  const [hashtagInput, setHashtagInput] = useState("");
  const [hashtags, setHashtags] = useState([]);

  const nextId = useRef(1);

  const onChangeHash = e => {
    setHashtagInput(e.target.value);
  };

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
    setHashtags(hashtags.filter(hashtag => hashtag[0].id !== id));
  };

  useEffect(() => {
    if (lunchId) {
      getLunchData();
    }
  }, []);

  const onSearchKeywordChange = e => {
    setPlaceInput(e.target.value);
  };

  const searchPlace = () => {
    setSearchKeyword(placeInput);
  };

  const addLunch = async e => {
    e.preventDefault();
    const newDate = date.getTime();
    console.log(newDate);
    console.log(new Date(newDate));
    // setLunch({
    //   ...lunch,
    //   date: date,
    // });
    // console.log(lunch);
    // await apis.createLunch(lunch);
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

        <hr />
        <InputWrap>
          <label>
            <LabelName>타이틀</LabelName>
            <LunchInput
              name="title"
              value={lunch ? lunch.title : ""}
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
              value={lunch ? lunch.content : ""}
              onChange={onChange}
              placeholder="점심약속에 대한 간단한 설명을 작성해주세요."
            />
          </label>
        </InputWrap>
        <InputWrap>
          <LabelName>약속 날짜 및 시간</LabelName>
          <Calendar setDate={setDate} />
        </InputWrap>
        <InputWrap>
          <label>
            <LabelName>진행시간</LabelName>
            <MemberNum
              onChange={onChange}
              value={lunch ? lunch.duration : ""}
              name="duration"
            >
              <Option>30분</Option>
              <Option>1시간</Option>
              <Option>1시간30분</Option>
              <Option>2시간</Option>
            </MemberNum>
          </label>
        </InputWrap>
        <InputWrap>
          <label>
            <LabelName>만나는 장소</LabelName>
            {place && <LabelName>{place.place_name}</LabelName>}
            <LunchInput
              name="title"
              value={placeInput}
              onChange={onSearchKeywordChange}
              placeholder="검색해주세요."
            />
            <SearchBtn onClick={searchPlace}>검색</SearchBtn>
            <MapContainer searchKeyword={searchKeyword} setPlace={setPlace} />
          </label>
        </InputWrap>
        <InputWrap>
          <label>
            <LabelName>모집인원</LabelName>
            <MemberNum
              onChange={onChange}
              value={lunch ? lunch.membernum : ""}
              name="membernum"
            >
              <Option>1</Option>
              <Option>2</Option>
              <Option>3</Option>
              <Option>4</Option>
            </MemberNum>
          </label>
        </InputWrap>
        <HashtagList hashtags={hashtags} onRemove={onRemove} />
        <InputWrap>
          <label>
            <LunchInput
              name="hashtagInput"
              value={hashtagInput}
              onChange={onChangeHash}
              onKeyPress={onKeyPress}
              placeholder="해시태그를 입력해주세요"
            />
          </label>
        </InputWrap>
        <ButtonWrap>
          {is_edit ? (
            <Button onClick={() => {}} type="submit">
              수정하기
            </Button>
          ) : (
            <Button onClick={addLunch} type="submit">
              등록하기
            </Button>
          )}
        </ButtonWrap>
      </CreateLunchBox>
    </>
  );
};

const CreateLunchBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 33.33vw;
  min-width: 350px;
  max-width: 1024px;
  margin: 30px auto;
  box-shadow: 5px 5px 5px 5px #ebecf0;
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
  border-radius: 5px;
`;

const Option = styled.option``;

const ButtonWrap = styled.div`
  width: 40%;
  margin: 30px;
`;

const SearchBtn = styled.button`
  background-color: black;
  color: white;
  font-size: 1.1rem;
  font-weight: 600;
  width: 30%;
  height: 3rem;
  border-radius: 10px;
`;
const Button = styled.button`
  background-color: #646464;
  color: white;
  height: 40px;
  width: 100%;
  border-radius: 20px;
  border: none;
  &:hover {
    background-color: #204969;
  }
`;

export default LunchCreateUpdate;
