# Local Audio Setup Guide

## Overview
The music section has been updated to use local audio files instead of external Spotify previews. This provides better performance, offline support, and eliminates external API dependencies.

## What Changed

### Before (External Dependencies)
- ❌ Spotify API calls for song information
- ❌ Apple Music API calls for previews
- ❌ External audio streaming
- ❌ Rate limiting and API changes
- ❌ Slower loading times

### After (Local Resources)
- ✅ Local audio files for previews
- ✅ Local artwork images
- ✅ Custom music player component
- ✅ Faster loading and offline support
- ✅ Full control over content

## Required Audio Files

You need to add these audio files to the `src/audio/` directory:

| Song | Filename | Description |
|------|----------|-------------|
| Immigrato in America | `immigrato-in-america.mp3` | 30-60 second preview |
| Storia di un brav'uomo | `storia-di-un-bravuomo.mp3` | 30-60 second preview |
| V'ammazzo | `vammazzo.mp3` | 30-60 second preview |
| Mente Criminale | `mente-criminale.mp3` | 30-60 second preview |

## Audio File Requirements

### Format
- **Primary**: MP3 (most compatible)
- **Alternative**: M4A, OGG
- **Codec**: H.264 for video, AAC/MP3 for audio

### Quality
- **Bitrate**: 128kbps minimum, 192kbps recommended
- **Sample Rate**: 44.1kHz
- **Channels**: Stereo

### File Size
- **Target**: Under 2MB per preview
- **Maximum**: 5MB per preview
- **Duration**: 30 seconds to 2 minutes

## How to Create Preview Files

### Option 1: Audio Editing Software
1. Use Audacity, GarageBand, or Adobe Audition
2. Import your full song
3. Select a 30-60 second section (chorus or hook works best)
4. Export as MP3 with 192kbps quality
5. Save with the exact filename listed above

### Option 2: Online Tools
1. Use online audio trimmers like AudioTrimmer.com
2. Upload your song
3. Set start and end points
4. Download as MP3

### Option 3: Mobile Apps
1. Use apps like AudioLab or WavePad
2. Import and trim your audio
3. Export in MP3 format

## File Placement

```
src/
├── audio/
│   ├── immigrato-in-america.mp3
│   ├── storia-di-un-bravuomo.mp3
│   ├── vammazzo.mp3
│   ├── mente-criminale.mp3
│   ├── README.md
│   └── setup-guide.md
```

## Testing

After adding your audio files:

1. **Start the development server**: `npm start`
2. **Navigate to the music section**
3. **Check that audio players appear** for each song
4. **Test play/pause functionality**
5. **Verify audio loads and plays correctly**

## Troubleshooting

### Audio Won't Play
- Check file format (MP3 is most reliable)
- Verify file path in config.js
- Check browser console for errors
- Ensure file size isn't too large

### Player Not Showing
- Verify `previewUrl` is set in config.js
- Check that audio file exists in src/audio/
- Ensure import statement is correct

### Poor Audio Quality
- Increase bitrate to 192kbps or higher
- Use higher sample rate (44.1kHz)
- Check original source quality

## Benefits of This Approach

1. **Performance**: Faster loading, no external API calls
2. **Reliability**: No rate limits or service outages
3. **Control**: Full control over audio quality and content
4. **Offline**: Works without internet connection
5. **Privacy**: No external tracking or analytics
6. **Cost**: No API usage fees or limits

## Next Steps

1. Add your audio preview files to `src/audio/`
2. Test the music section in your browser
3. Customize the player styling if desired
4. Add more songs by following the same pattern
