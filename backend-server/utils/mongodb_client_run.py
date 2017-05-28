import mongodb_client as client

""" test db operations """
def ts_basic():
	db = client.get_db('onews')
	db.demo.drop()
	assert db.demo.count() == 0
	db.demo.insert({'test':124})
	assert db.demo.count() == 1
	db.demo.drop()
	assert db.demo.count() == 0
	print 'test passed!'

if __name__ == "__main__":
	ts_basic()