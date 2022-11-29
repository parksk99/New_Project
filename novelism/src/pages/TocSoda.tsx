import { useRef, useEffect, useState } from "react";
import { Container } from "../styles/TocSoda/Layout";
import { useRecoilState } from "recoil";
import { Music, recoilMusicState } from "../states/recoilMusicState";

export default function TocSoda() {
  const [musicState, setMusicState] = useRecoilState(recoilMusicState);
  const viewRef = useRef<any>(null);
  const [curUrl, setCurUrl] = useState("");

  const tmpMusics = () => {
    const tmp1: Music = {
      emotion: "기쁨",
      ration: 0.25,
      title: "𝒑𝒍𝒂𝒚𝒍𝒊𝒔𝒕. LUCY (루시) 노래모음 플레이리스트",
      thumbnailPath:
        "https://i.pinimg.com/564x/8f/1a/13/8f1a1332a83aa435466dfd426fb9f0c9.jpg",
      videoUrl: "https://youtu.be/E8pO11TtGWc",
    };
    const tmp2: Music = {
      emotion: "슬픔",
      ration: 0.5,
      title: "[ 𝑷𝒍𝒂𝒚𝒍𝒊𝒔𝒕 ] 결(KYUL)의 음악을 한번에",
      thumbnailPath:
        "https://i.pinimg.com/564x/57/f2/5b/57f25b37f571872130e642b5e42f33ce.jpg",
      videoUrl: "https://youtu.be/w3UBP1zpgok",
    };
    const tmp3: Music = {
      emotion: "짜증",
      ration: 0.75,
      title:
        "𝕡𝕝𝕒𝕪𝕝𝕚𝕤𝕥 내 취향 가득 담은 Feat. 해리 스타일스, 찰리 푸스, 코난 그레이, 라우브, 트로이 시반",
      thumbnailPath:
        "https://i.pinimg.com/564x/f3/08/f6/f308f6ba5997d57846dbede3714a2b1a.jpg",
      videoUrl: "https://youtu.be/Pqzeqt7j2uQ",
    };
    const tmp4: Music = {
      emotion: "위로",
      ration: 1.0,
      title: "-Playlist- 위로받고 싶을 때 듣는 밍기뉴 플레이리스트",
      thumbnailPath:
        "https://i.pinimg.com/564x/c5/4d/18/c54d185443c3f55e5b39b9da06ac13dd.jpg",
      videoUrl: "https://youtu.be/lwMEKstov4o",
    };
    setMusicState(tmp1);
  };

  const moveUrlEventHandler = (e: any) => {
    setCurUrl(e.url);
  };

  useEffect(() => {
    viewRef.current.addEventListener("will-navigate", (e: any) =>
      moveUrlEventHandler(e)
    );
  }, []);

  useEffect(() => {
    if (curUrl !== "") {
      console.log(curUrl);
      tmpMusics();
    }
  }, [curUrl]);

  return (
    <Container>
      <webview
        ng-style="style"
        id="content"
        src="https://www.tocsoda.co.kr/webnovelMainView"
        useragent="Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; AS; rv:11.0) like Gecko"
        ref={viewRef}
      ></webview>
    </Container>
  );
}