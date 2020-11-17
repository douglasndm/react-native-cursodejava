import IVideo from '../@types/video';
import YouTubeAPI from '../services/youtube';

interface getVideosFromAPlaylistProps {
    playlistId: string;
    maxResults?: number;
}

export async function getVideosFromAPlaylist({
    playlistId,
    maxResults,
}: getVideosFromAPlaylistProps): Promise<Array<IVideo>> {
    try {
        const response = await YouTubeAPI.get('/playlistItems', {
            params: {
                part: 'id,snippet',
                playlistId,
                maxResults,
            },
        });

        return response.data.items;
    } catch (err) {
        throw new Error(err);
    }
}

interface getVideosFromASearchProps {
    query: string;
    maxResults?: number;
}

export async function getVideosFromASearch({
    query,
    maxResults,
}: getVideosFromASearchProps): Promise<Array<IVideo>> {
    try {
        const response = await YouTubeAPI.get('/search', {
            params: {
                part: 'id,snippet',
                q: query,
                maxResults,
            },
        });

        return response.data.items;
    } catch (err) {
        throw new Error(err);
    }
}
