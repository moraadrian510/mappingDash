const router = require("express").Router();
const { Tag, Product, ProductTag } = require("../../models");

// The `/api/tags` endpoint

router.get("/", async (req, res) => {
  try {
    const tagData = await Tag.findAll({
      include: Product,
      ProductTag,
    });
    res.status(200).json(tagData);
  } catch (err) {
    res.status(404).json(err);
  }
});

// find a single tag by its `id`
router.get("/:id", async (req, res) => {
  try {
    const tagData = await Tag.findByPk(req.params.id, {
      include: Product,
      ProductTag,
    });
    res.status(200).json(tagData);
  } catch (err) {
    res.status(404).json(err);
  }
});

// create a new tag
router.post("/", async (req, res) => {
  try {
    const tagData = await Tag.create({
      tag_id: req.body.tag_id,
    });
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// update a tag's name by its `id` value
router.put("/:id", async (req, res) => {
  try {
    const tagId = req.params.id;
    const updatedTag = await Tag.update(
      {
        tag_name: req.body.tag_name,
      },
      { where: { id: tagId } }
    );
    res.status(200).json(updatedTag);
  } catch (err) {
    res.status(500).json(err);
  }
});

// delete on tag by its `id` value
router.delete("/:id", async (req, res) => {
  try {
    const tagData = await Tag.destroy({
      where: { id: req.params.id },
    });
    res.status(200).json({ message: "Tag deleted successfully" });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
