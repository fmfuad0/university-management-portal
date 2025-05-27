import {Router} from "express";
import {verifyJWT} from "../middleware/authMiddleware.js";
import {
    createSection,
    deleteSection, getEnrolledSections,
    getSectionById,
    getSections, getSectionsForPreRegistration, toggleSectionRegister,
    updateSection
} from "../controllers/sectionController.js";

const sectionRouter = Router();

sectionRouter.get('/', (req,
res) => {res.json("Section Route")})

sectionRouter.route("/pre-registration/:studentId").post(verifyJWT, getSectionsForPreRegistration)
sectionRouter.route("/toggle-register/:studentId/:sectionId/:operation").get(verifyJWT, toggleSectionRegister)
sectionRouter.route("/get-enrolled-sections").post(verifyJWT, getEnrolledSections);
sectionRouter.route("/create").post(verifyJWT, createSection)
sectionRouter.route("/get-all").post(verifyJWT, getSections)
sectionRouter.route("/get/:sectionId").get(verifyJWT, getSectionById)



sectionRouter.route("/update/:sectionId").put(verifyJWT, updateSection)
sectionRouter.route("/delete/:sectionId").delete(verifyJWT, deleteSection)

export default sectionRouter;