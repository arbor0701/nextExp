export default function handler(req, res) {
    res.status(200).json({ list1})
  }

const list1 =
[

    {"id":1, "title":"html","body":"html is ..."},
    {"id":2, "title":"css","body":"css is ..."}
]