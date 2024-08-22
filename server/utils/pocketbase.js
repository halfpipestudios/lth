import PocketBase from 'pocketbase';

const pb = new PocketBase(process.env.POCKETBASE_URL);
pb.autoCancellation(false);

export default pb;
