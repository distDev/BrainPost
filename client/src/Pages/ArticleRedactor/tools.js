// tools.js
import Embed from '@editorjs/embed';
import List from '@editorjs/list';
import Warning from '@editorjs/warning';
import Raw from '@editorjs/raw';
import Header from '@editorjs/header';
import Quote from '@editorjs/quote';
import SimpleImage from '@editorjs/simple-image';

export const EDITOR_JS_TOOLS = {
  // NOTE: Paragraph is default tool. Declare only when you want to change paragraph option.
  // paragraph: Paragraph,
  embed: Embed,
  list: List,
  warning: Warning,
  raw: Raw,
  header: Header,
  quote: Quote,
  simpleImage: SimpleImage,
};
