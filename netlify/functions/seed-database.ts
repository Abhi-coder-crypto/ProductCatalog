import { seedDatabase } from "../../server/seed";

export const handler = async () => {
  try {
    console.log("Starting database seeding...");
    await seedDatabase();
    
    return {
      statusCode: 200,
      body: JSON.stringify({ 
        message: "Database seeded successfully!",
        success: true 
      })
    };
  } catch (error) {
    console.error("Seeding error:", error);
    
    return {
      statusCode: 500,
      body: JSON.stringify({ 
        message: "Failed to seed database",
        error: error instanceof Error ? error.message : String(error),
        success: false
      })
    };
  }
};
