import './TaggedText.scss';

type props = {
    mainText: Array<String>;
    tagText: String;
    textSize: number;
    accent?: boolean
  }

export function TaggedText({mainText, tagText, textSize, accent}: props){

    let className = "mainText";

    if(accent){
        className+=" accent";
    }

    return (
        <div className="taggedText">
            <p className="tag">&lt;{tagText}&gt;</p>
            {mainText.map((line,index) => <p key={index} className={className} style={{fontSize: textSize}}>{line}</p>)}
            {/* <p className={className} style={{fontSize: textSize,}}>{mainText}</p> */}
            <p className='tag'>&lt;&#47;{tagText}&gt;</p>
        </div>
    )
}