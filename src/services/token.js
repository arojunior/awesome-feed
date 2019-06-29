import axios from 'axios';
import { AWESOME_FEED_SERVER } from '../constants';

export default () => axios.get(AWESOME_FEED_SERVER);
