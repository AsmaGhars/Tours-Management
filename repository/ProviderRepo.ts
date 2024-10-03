import { Provider } from "../model/Provider";

interface IProviderRepo {
  save(provider: Provider): Promise<void>;
  update(provider: Provider): Promise<void>;
  delete(providerId: number): Promise<void>;
  retrieveById(providerId: number): Promise<Provider>;
  retrieveAll(): Promise<Provider[]>;
}

export class ProviderRepo implements IProviderRepo {
  async save(provider: Provider): Promise<void> {
    try {
      await Provider.create({
        name: provider.name,
        email: provider.email,
        phone: provider.phone,
        address: provider.address,
        category: provider.category,
      });
    } catch (error) {
      throw new Error("Failed to create provider!");
    }
  }
  async update(provider: Provider): Promise<void> {
    try {
      const new_provider = await Provider.findOne({
        where: {
          id: provider.id,
        },
      });
      if (!new_provider) {
        throw new Error("Provider not found!");
      }
      new_provider.name = provider.name;
      new_provider.address = provider.address;
      new_provider.phone = provider.phone;
      new_provider.email = provider.email;
      new_provider.category = provider.category;

      await new_provider.save();
    } catch (error) {
      throw new Error("Failed to update provider!");
    }
  }
  async delete(providerId: number): Promise<void> {
    try {
      const new_provider = await Provider.findOne({
        where: {
          id: providerId,
        },
      });
      if (!new_provider) {
        throw new Error("Provider not found!.");
      }

      await new_provider.destroy();
    } catch (error) {
      throw new Error("Failed to delete provider!");
    }
  }
  async retrieveById(providerId: number): Promise<Provider> {
    try {
      const new_provider = await Provider.findOne({
        where: {
          id: providerId,
        },
      });
      if (!new_provider) {
        throw new Error("Provider not found!.");
      }
      return new_provider;
    } catch (error) {
      throw new Error("Failed to retrieve proider by id!");
    }
  }
  async retrieveAll(): Promise<Provider[]> {
    try {
      return await Provider.findAll();
    } catch (error) {
      throw new Error("Failed to find all providers!");
    }
  }
}
