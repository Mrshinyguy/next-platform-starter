'use server';
import { put, del, list, head } from '@vercel/blob';
import { uploadDisabled } from 'utils';

// Always be sanitizing data in real sites!
export async function uploadShapeAction({ parameters }) {
    if (uploadDisabled) throw new Error('Sorry, uploads are disabled');
    const key = parameters.name;
    const blob = new Blob([JSON.stringify(parameters)], { type: 'application/json' });
    await put(`shapes/${key}.json`, blob, { access: 'public' });
    console.log('Stored shape with parameters:', parameters, 'to key:', key);
}

export async function listShapesAction() {
    const { blobs } = await list({ prefix: 'shapes/' });
    const keys = blobs.map(({ pathname }) => pathname.replace('shapes/', '').replace('.json', ''));
    return keys;
}

export async function getShapeAction({ keyName }) {
    const { blobs } = await list({ prefix: `shapes/${keyName}.json` });
    if (blobs.length === 0) return null;
    const response = await fetch(blobs[0].url);
    const data = await response.json();
    return data;
}