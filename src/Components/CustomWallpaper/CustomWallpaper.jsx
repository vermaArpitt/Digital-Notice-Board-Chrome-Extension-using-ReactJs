import './CustomWallpaper.css';

export default function CustomWallpaper() {
    const [wallpaper, setWallpaper] = useState("");
    const handleWallpaperChange = (e) => {
        
    }

    return (
        <div className='custom-wallpaper'>
            <input type="file" accept="image/*" onInput={handleWallpaperChange}>Change Wallpaper</input>
        </div>
    )
}