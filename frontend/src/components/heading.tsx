import GoogleFontLoader from 'react-google-font-loader';

export default function Heading(){
    return(
        <div className="heading">
            <GoogleFontLoader
                fonts={[
                {
                    font: 'Moirai One', // Replace with the desired font name
                    weights: [400, '400i'], // Specify the font weights you want to use
                },
                ]}
            />
            <h1 style={{ fontFamily: 'Moirai One, sans-serif'}}>MEmotion</h1>
            <em style={{ fontFamily: 'sans-serif', fontStyle: 'italic' }}>
                <center>Memo your emotions!</center>
            </em>
        </div>
    )
}