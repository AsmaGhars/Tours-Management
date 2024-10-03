import { Image } from "../model/Image";

interface IImageRepo {
  save(image: Image): Promise<void>;
  update(image: Image): Promise<void>;
  delete(imageId: number): Promise<void>;
  retrieveById(imageId: number): Promise<Image>;
  retrieveAll(): Promise<Image[]>;
}

export class ImageRepo implements IImageRepo {
  async save(image: Image): Promise<void> {
    try {
      await Image.create({
        name: image.name,
        profile: image.profile,
        slider: image.slider,
        map: image.map,
      });
    } catch (error) {
      throw new Error("Failed to create image!");
    }
  }
  async update(image: Image): Promise<void> {
    try {
      const new_image = await Image.findOne({
        where: {
          id: image.id,
        },
      });
      if (!new_image) {
        throw new Error("Image not found!");
      }
      (new_image.name = image.name),
        (new_image.profile = image.profile),
        (new_image.slider = image.slider),
        (new_image.map = image.map),
        await new_image.save();
    } catch (error) {
      throw new Error("Failed to update image!");
    }
  }
  async delete(imageId: number): Promise<void> {
    try {
      const new_image = await Image.findOne({
        where: {
          id: imageId,
        },
      });
      if (!new_image) {
        throw new Error("Image not found!.");
      }

      await new_image.destroy();
    } catch (error) {
      throw new Error("Failed to delete image!");
    }
  }
  async retrieveById(imageId: number): Promise<Image> {
    try {
      const new_image = await Image.findOne({
        where: {
          id: imageId,
        },
      });
      if (!new_image) {
        throw new Error("Image not found!.");
      }
      return new_image;
    } catch (error) {
      throw new Error("Failed to retrieve image by id!");
    }
  }
  async retrieveAll(): Promise<Image[]> {
    try {
      return await Image.findAll();
    } catch (error) {
      throw new Error("Failed to find all Images!");
    }
  }
}
