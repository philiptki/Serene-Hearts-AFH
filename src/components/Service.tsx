import React from "react";
import "./Service.css"
import Card from "./Card";

function Service() {
    return (

        <div className="service">
            <div className="service-container">

                <div className="text-container">
                    <h3 className="text-title">Our Services</h3>
                    <h1 className="text-heading">Personal Care That Makes You Feel at Home</h1>
                    <p className="text-description">
                        At Gateway Comfort Care, we recognize that every resident has their own unique needs.
                        That’s why we offer personalized services designed to cater to each individual’s specific
                        requirements. Whether it’s helping with daily living tasks, providing nutritious meals,
                        managing housekeeping, offering transportation, or organizing a variety of recreational and
                        social activities, we are dedicated to creating a nurturing and engaging environment for all.
                    </p>

                </div>

                <div className="grid-container">

                    <div className="grid">

                        <div className="grid-item">
                            <Card
                                image="/Serene-Hearts-AFH/images/contact.jpg"
                                icon="fa-solid fa-bath"
                                title="Support with Personal Daily Activities"
                                description="Our experienced staff is here to help with essential daily activities
                                such as personal hygiene, dressing, and grooming. We focus on promoting independence
                                while providing the care and support needed to maintain comfort throughout
                                these routines."
                            />
                        </div>

                        <div className="grid-item">
                            <Card
                                image="/Serene-Hearts-AFH/images/contact.jpg"
                                icon="fa-solid fa-utensils"
                                title="Personal Meal Plans and Dietary Assistance"
                                description="We serve wholesome, delicious meals crafted from fresh, high-quality
                                ingredients. Our team tailors each meal plan to meet the unique dietary needs and
                                preferences of every resident, ensuring a nutritious and enjoyable dining experience."
                            />
                        </div>

                        <div className="grid-item">
                            <Card
                                image="/Serene-Hearts-AFH/images/contact.jpg"
                                icon="fa-solid fa-person-walking"
                                title="Engaging Daily Activities"
                                description="Our engaging activity schedule includes exercise, arts and crafts,
                                and outings, all designed to align with the unique interests of each resident.
                                These activities encourage active participation, foster social connections, and
                                ensure a fulfilling and enjoyable experience for everyone."
                            />
                        </div>

                        <div className="grid-item">
                            <Card
                                image="/Serene-Hearts-AFH/images/contact.jpg"
                                icon="fa-solid fa-heart"
                                title="Unique Care Plans for Every Individual"
                                description="Each resident is offered a care plan that is specifically designed to
                                align with their individual needs and preferences. By focusing on every aspect of
                                their well-being, from health management to personal activities. We create a nurturing
                                environment that promotes both comfort and a sense of belonging."
                            />
                        </div>

                        <div className="grid-item">
                            <Card
                                image="/Serene-Hearts-AFH/images/contact.jpg"
                                icon="fa-solid fa-shirt"
                                title="Housekeeping and Laundry Services"
                                description="We provide detailed housekeeping and laundry services to ensure a
                                tidy and sanitary environment for our residents. From consistent cleaning of
                                personal spaces to attentive care of laundry, we prioritize the comfort and
                                well-being of our residents."
                            />
                        </div>

                        <div className="grid-item">
                            <Card
                                image="/Serene-Hearts-AFH/images/contact.jpg"
                                icon="fa-solid fa-wheelchair"
                                title="Transportation Assistance for Appointments and Activities"
                                description="For all medical appointments, we provide safe and dependable
                                transportation. In addition to healthcare-related travel, we offer a family-oriented
                                approach for shopping trips and other activites, combining professional assistance
                                with a personal family touch."
                            />
                        </div>

                    </div>
                </div>
            </div>
        </div>


    )
}

export default Service;
