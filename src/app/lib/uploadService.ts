import { ref, uploadString, getDownloadURL, deleteObject } from "firebase/storage";
import { storage } from "./firebase";
import { v4 as uuidv4 } from "uuid";

/**
 * Uploads a base64 image string to Firebase Storage and returns the download URL.
 * @param base64String The base64 encoded image data
 * @param folder The folder to store the image in (default: 'cars')
 * @returns Promise<string> The download URL of the uploaded image
 */
export const uploadImage = async (base64String: string, folder: string = 'cars'): Promise<string> => {
  try {
    // Generate a unique filename
    const filename = `${uuidv4()}.jpg`;
    const storageRef = ref(storage, `${folder}/${filename}`);

    // Upload the base64 string
    // Firebase uploadString expects only the base64 part, or the data URL format.
    // 'data_url' format includes headers: "data:image/jpeg;base64,..."
    await uploadString(storageRef, base64String, 'data_url');

    // Get and return the download URL
    const downloadURL = await getDownloadURL(storageRef);
    return downloadURL;
  } catch (error) {
    console.error("Firebase upload error:", error);
    throw new Error("Failed to upload image to Firebase Storage");
  }
};

/**
 * Deletes an image from Firebase Storage using its download URL.
 * @param url The download URL of the image to delete
 */
export const deleteImage = async (url: string): Promise<void> => {
  try {
    // We need the reference from the URL
    // Firebase lets you create a ref from a full URL
    const storageRef = ref(storage, url);
    await deleteObject(storageRef);
  } catch (error) {
    console.error("Firebase delete error:", error);
    // We don't necessarily want to throw here during a car update, 
    // but good to log it.
  }
};
