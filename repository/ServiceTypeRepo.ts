import { ServiceType } from "../model/ServiceType";

interface IServiceTypeRepo {
  save(service_type: ServiceType): Promise<void>;
  update(service_type: ServiceType): Promise<void>;
  delete(service_typeId: number): Promise<void>;
  retrieveById(service_typeId: number): Promise<ServiceType>;
  retrieveAll(): Promise<ServiceType[]>;
}

export class ServiceTypeRepo implements IServiceTypeRepo {
  async save(service_type: ServiceType): Promise<void> {
    try {
      await ServiceType.create({
        name: service_type.name,
      });
    } catch (error) {
      throw new Error("Failed to create service type!");
    }
  }
  async update(service_type: ServiceType): Promise<void> {
    try {
      const new_service_type = await ServiceType.findOne({
        where: {
          id: service_type.id,
        },
      });
      if (!new_service_type) {
        throw new Error("Service type not found!");
      }

      new_service_type.name = service_type.name;

      await new_service_type.save();
    } catch (error) {
      throw new Error("Failed to update dervice type!");
    }
  }
  async delete(service_typeId: number): Promise<void> {
    try {
      const new_service_type = await ServiceType.findOne({
        where: {
          id: service_typeId,
        },
      });
      if (!new_service_type) {
        throw new Error("Service Type not found!.");
      }

      await new_service_type.destroy();
    } catch (error) {
      throw new Error("Failed to delete service type!");
    }
  }
  async retrieveById(service_typeId: number): Promise<ServiceType> {
    try {
      const new_service_type = await ServiceType.findOne({
        where: {
          id: service_typeId,
        },
      });
      if (!new_service_type) {
        throw new Error("Service type not found!.");
      }
      return new_service_type;
    } catch (error) {
      throw new Error("Failed to retrieve service type by id!");
    }
  }
  async retrieveAll(): Promise<ServiceType[]> {
    try {
      return await ServiceType.findAll();
    } catch (error) {
      throw new Error("Failed to find all service types!");
    }
  }
}
