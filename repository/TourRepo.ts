import { Period } from "../model/Period";
import { Tour } from "../model/Tour";

interface ITourRepo {
  save(tour: Tour): Promise<void>;
  update(tour: Tour): Promise<void>;
  delete(tourId: number): Promise<void>;
  retrieveById(tourId: number): Promise<Tour>;
  retrieveAll(): Promise<Tour[]>;
}

export class TourRepo implements ITourRepo {
  async save(tour: Tour): Promise<void> {
    try {
      await Tour.create({
        operates: tour.operates,
        name: tour.name,
        starts: tour.starts,
        duration: tour.duration,
        meeting_point: tour.meeting_point,
        unit: tour.unit,
        active: tour.active,
        baby: tour.baby,
        child: tour.child,
        max_pax: tour.max_pax,
        min_adult_age: tour.min_adult_age,
        min_child_age: tour.min_child_age,
        max_child_age: tour.max_child_age,
        description: tour.description,
        highlight: tour.highlight,
        what_is_included: tour.what_is_included,
        what_is_excluded: tour.what_is_excluded,
        paragraph_1: tour.paragraph_1,
        paragraph_2: tour.paragraph_2,
        paragraph_3: tour.paragraph_3,
        paragraph_4: tour.paragraph_4,
        paragraph_5: tour.paragraph_5,
        id_service_type: tour.id_service_type,
        id_location: tour.id_location,
        id_period: tour.id_period,
        id_provider: tour.id_provider,
        id_image: tour.id_image,
      });
    } catch (error) {
      throw new Error("Failed to create tour!");
    }
  }
  async update(tour: Tour): Promise<void> {
    try {
      const new_tour = await Tour.findOne({
        where: {
          id: tour.id,
        },
      });
      if (!new_tour) {
        throw new Error("Tour not found!");
      }

      new_tour.operates = tour.operates;
      new_tour.name = tour.name;
      new_tour.starts = tour.starts;
      new_tour.duration = tour.duration;
      new_tour.meeting_point = tour.meeting_point;
      new_tour.unit = tour.unit;
      new_tour.active = tour.active;
      new_tour.baby = tour.baby;
      new_tour.child = tour.child;
      new_tour.max_pax = tour.max_pax;
      new_tour.min_adult_age = tour.min_adult_age;
      new_tour.min_child_age = tour.min_child_age;
      new_tour.max_child_age = tour.max_child_age;
      new_tour.description = tour.description;
      new_tour.highlight = tour.highlight;
      new_tour.what_is_included = tour.what_is_included;
      new_tour.what_is_excluded = tour.what_is_excluded;
      new_tour.paragraph_1 = tour.paragraph_1;
      new_tour.paragraph_2 = tour.paragraph_2;
      new_tour.paragraph_3 = tour.paragraph_3;
      new_tour.paragraph_4 = tour.paragraph_4;
      new_tour.paragraph_5 = tour.paragraph_5;
      new_tour.id_service_type = tour.id_service_type;
      new_tour.id_location = tour.id_location;
      new_tour.id_period = tour.id_period;
      new_tour.id_provider = tour.id_provider;
      new_tour.id_image = tour.id_image;

      await new_tour.save();
    } catch (error) {
      throw new Error("Failed to update tour!");
    }
  }
  async delete(tourId: number): Promise<void> {
    try {
      const new_tour = await Tour.findOne({
        where: {
          id: tourId,
        },
      });
      if (!new_tour) {
        throw new Error("Tour not found!.");
      }

      await new_tour.destroy();
    } catch (error) {
      throw new Error("Failed to delete tour!");
    }
  }
  async retrieveById(tourId: number): Promise<Tour> {
    try {
      const new_tour = await Tour.findOne({
        where: {
          id: tourId,
        },
      });
      if (!new_tour) {
        throw new Error("Tour not found!.");
      }
      return new_tour;
    } catch (error) {
      throw new Error("Failed to retrieve Tour by id!");
    }
  }
  async retrieveAll(): Promise<Tour[]> {
    try {
      return await Tour.findAll({
        include: [
          {
            model: Period,
            attributes: ["base_price"],
          },
        ],
      });
    } catch (error) {
      throw new Error("Failed to find all tours!");
    }
  }
}
