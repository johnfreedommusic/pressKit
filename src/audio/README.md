# Audio Files Directory

This directory contains local audio preview files for the music section.

## Required Files

To make the music section work with local audio previews, you need to add the following audio files:

1. **immigrato-in-america.mp3** - Preview for "Immigrato in America"
2. **storia-di-un-bravuomo.mp3** - Preview for "Storia di un brav'uomo"  
3. **vammazzo.mp3** - Preview for "V'ammazzo"
4. **mente-criminale.mp3** - Preview for "Mente Criminale"

## Audio Format Requirements

- **Format**: MP3, M4A, or OGG
- **Quality**: 128kbps or higher recommended
- **Duration**: 30 seconds to 2 minutes (preview length)
- **File Size**: Keep under 5MB per file for optimal loading

## How to Add Audio Files

1. Place your audio files in this directory
2. Make sure the filenames match exactly with the imports in `src/config.js`
3. The audio files will automatically be used as previews in the music section

## Benefits of Local Audio

- ✅ No external API dependencies
- ✅ Faster loading times
- ✅ Works offline
- ✅ No rate limiting or API changes
- ✅ Full control over audio quality and content
