export interface Author {
    username: string;
    first_name: string;
    last_name: string;
    email: string;
}

export interface Article {
    id: number;
    title: string;
    body: string;
    updated_at: string;
    topic: string;
    subheading: string;
    picture_url: String;
    num_likes: number;
    author: Author;

}

export interface ArticleDetail {
    id: number;
    title: string;
    body: string;
    updated_at: string;
    topic: string;
    subheading: string;
    picture_url: String;
    likes: Author[];
    author: Author;

}

