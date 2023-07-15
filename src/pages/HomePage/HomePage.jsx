export default function HomePage() {

  return (
    <Container>
      <Row>
        <Col md={9} className="HomePage">
          <h1>HomePage</h1>
          {threeByThrees.map(({items, user}) => (
            <ThreeByThree items={items} user={user} showTitle={showTitle}/>
          ))}
        </Col>
        <Col>
          <Button size="md" variant="info" onClick={() => setShowTitle(!showTitle)}>SHOW TITLES</Button>    
        </Col>
      </Row>
    </Container>
  );
}