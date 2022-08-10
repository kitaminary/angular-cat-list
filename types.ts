export interface Cat {
  id: string;
  name: string;
  description: string;
  temperament: string;
  origin: string;
  life_span: string;
  wikipedia_url: string;
  image: Image;
};

export interface Image {
  id: string;
  url: string;
}
