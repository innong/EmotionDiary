import MyButton from "./MyButton";

const DiaryItem = ({ id, emotion, content, date }) => {

    const strDate = new Date(parseInt(date)).toLocaleDateString();

    return (
        <div className="DiaryItem">
            <div className={[
                "emotion_img_wrapper",
                `emotion_img_wrapper_${emotion}`,
            ].join(" ")}
            >
                <img src={process.env.PUBLIC_URL + `assets/emotion${emotion}.png`} />
            </div>
            <div className="info_wrapper">
                <div className="diary_date">{strDate}</div>
                <div className="diary_content_preview">{content.slice(0, 25)}</div>
            </div>
            <div className="btn_wrapper">
                <MyButton text={"수정하기"} />
            </div>
        </div>
    );
}

export default DiaryItem;