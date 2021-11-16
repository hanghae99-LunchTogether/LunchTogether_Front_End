import React from "react";
import LogoImg from "../assets/logofooter.svg";
import { chatActions } from "../redux/modules/chat";

const Home = ({ userName, roomName, setUserName, setRoomName }) => {
    const [room, setRoom] = useState({
        title: "",
        kind: "",
        max:"2",
        password:"",
        host:""
    });
    const [roomList, setRoomList] = useState([]);

    const onChange = (e) => {
    const {
        target: { name, value },
    } = e;
    name = "password"&&value? setRoom({...room,[kind]: "비공개방",}):''; 

    setRoom({
        ...room,
        [name]: value,
    });
    };

    const getRooms = async () => {
        const data = await apis.getroom();
        const rooms = data.rooms
        console.log(rooms);
        setLunchList([...roomList, ...rooms]);
      };


    const createroom = async () => {
        try {
          chatActions.createroomAPI(room)
        } catch (error) {
          console.log(error);
        }
      };
    
    useEffect(() => {
        getRooms();
    }, []);
  return (
    <Wrapper>
      <Logo>
       <img src={LogoImg} />
      </Logo>

      <RoomList>
        {roomList.map((item) => {
                return (
                <Wrapper>
                    <Text>{item.title}</Text>
                    <Text>{item.kind}</Text>
                    <Text>{item.max}</Text>
                    <Text>{item.host}</Text>
                    <Button onClick={}> 해당방 참가하기</Button>
                </Wrapper>
                );
            })}
      </RoomList>
      <InputWrapper>
      <Text> 제목</Text>
      <Input
            name="title"
            placeholder="제목 넣어주고"
            type="text"
            onChange={onChange}
            value={room.title}
            required
      />
      </InputWrapper>
      <InputWrapper>
      <Text> 최대 수용 인원</Text>
      <Input
            name="max"
            placeholder="몇명 까지?"
            type="text"
            onChange={onChange}
            value={room.max}
            required
      />
      </InputWrapper>
      <InputWrapper>
      <Text> 비밀번호</Text>
      <Input
            name="password"
            placeholder="비밀번호"
            type="password"
            onChange={onChange}
            value={room.paasword}
      />
      </InputWrapper>
      <Button onClick={createroom}> 새로운 방만들어보자</Button>
    </Wrapper>
  );
};

export default Home;