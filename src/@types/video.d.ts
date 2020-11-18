interface IVideo {
    id: string;
    snippet: {
        publishedAt: string;
        channelId: string;
        channelTitle: string;
        title: string;
        description: string;
        thumbnails: {
            default: {
                url: string;
            };
            medium: {
                url: string;
            };
            high: {
                url: string;
            };
            standard: {
                url: string;
            };
            maxres: {
                url: string;
            };
        };
        resourceId: {
            videoId: string;
        };
    };
}
